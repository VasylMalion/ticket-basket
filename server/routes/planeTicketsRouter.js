import {Router} from "express";
import PlaneTicket from "../models/PlaneTicket";

const router = Router();

router.post("/add-ticket", async (req, res) => {

    try {
        const {startPoint, endPoint, cost, departureDay, arrivalDay, departureTime, arrivalTime, company, countOfSeats, classOfTicket } = req.body;

        const ticket = new PlaneTicket({
            startPoint,
            endPoint,
            cost,
            departureDay,
            arrivalDay,
            departureTime,
            arrivalTime,
            company,
            countOfSeats,
            classOfTicket
        })

        if (ticket) {
            await ticket.save()
        }

        res.status(201).json({message: "Success add ticket"})
    }
    catch (e) {
        console.log(e)
    }
})

router.post("/planes", async (req, res) => {

    const {
        startPoint,
        endPoint,
        departureDate,
        arrivalDate,
        countOfSeats,
        classOfTicket
    } = req.body;

    if (!arrivalDate.length) {

        // Кількість пересадок
        const withoutStop = [];
        const with1Stop = [];
        const with2Stops = [];

        // Масиви міст зупинок
        const stop1ArrCity = [];
        const stop2ArrCity = [];
        const stop3ArrCity = [];

        let withoutStopStart = []

        if (classOfTicket === "Будь-який") {
            withoutStopStart = await PlaneTicket.find({
                startPoint,
                endPoint,
                departureDay: departureDate,
            })
        } else {
            withoutStopStart = await PlaneTicket.find({
                startPoint,
                endPoint,
                departureDay: departureDate,
                classOfTicket
            })
        }

        for (const ticket of withoutStopStart) {
            if (ticket.countOfSeats >= countOfSeats) {
                withoutStop.push(ticket)
            }
        }

        const allTickets = {
            "ticketType": "single",
            "tickets": [withoutStop]
        }

        return res.send(allTickets)

    } else {
        // Кількість пересадок
        const withoutStop = [];
        const with1Stop = [];
        const with2Stops = [];

        const withoutStopReturn = [];
        const with1StopReturn = [];
        const with2StopsReturn = [];

        let withoutStopStart = null;
        let withoutStopEnd = null;

        if (classOfTicket === "Будь-який") {
            withoutStopStart = await PlaneTicket.find({
                startPoint,
                endPoint,
                departureDay: departureDate,
            })

            withoutStopEnd = await PlaneTicket.find({
                startPoint: endPoint,
                endPoint: startPoint,
                departureDay: arrivalDate,
            })
        } else {
            withoutStopStart = await PlaneTicket.find({
                startPoint,
                endPoint,
                departureDay: departureDate,
                classOfTicket
            })

            withoutStopEnd = await PlaneTicket.find({
                startPoint: endPoint,
                endPoint: startPoint,
                departureDay: arrivalDate,
                classOfTicket
            })
        }

        for (const ticket of withoutStopStart) {

            const ticket1 = ticket
            let ticket2 = null

            if (ticket.countOfSeats >= countOfSeats) {
                if (withoutStopEnd.lenght === 0 ) {
                    return
                }
                for (const endTicket of withoutStopEnd) {

                    const time1 = ticket.arrivalTime.slice(0,2) * 60 + ticket.arrivalTime.slice(3,5)
                    const time2 = endTicket.departureTime.slice(0,2) * 60 + endTicket.departureTime.slice(3,5)

                    if (endTicket.countOfSeats >= countOfSeats) {
                        if (ticket1.arrivalDay === endTicket.departureDay) {
                            if (+time1 < +time2) {
                                if (!ticket2) {
                                    ticket2 = endTicket
                                }
                                if (time2 < ticket2.departureTime.slice(0,2) * 60 + ticket2.departureTime.slice(3,5)) {
                                    ticket2 = endTicket
                                }
                            }
                        } else {
                            if (!ticket2) {
                                ticket2 = endTicket
                            }
                            if (time2 < ticket2.departureTime.slice(0,2) * 60 + ticket2.departureTime.slice(3,5)) {
                                ticket2 = endTicket
                            }
                        }
                    }
                }
            }
            if (ticket2) {
                withoutStop.push([ticket1, ticket2])
            }
        }

        const withoutStopStartReturn = await PlaneTicket.find({
            startPoint: endPoint,
            endPoint: startPoint,
            departureDay: departureDate,
            classOfTicket
        })

        for (const ticket of withoutStopStartReturn) {
            if (ticket.countOfSeats >= countOfSeats) {
                withoutStopReturn.push(ticket)
            }
        }

        const allTickets = {
            "ticketType": "double",
            "tickets": [withoutStop],
        }

        return res.send(allTickets)
    }
})

export {router}

//
//
// const startPointTickets = await PlaneTicket.find({startPoint})
//
// const ticketWithParams = []
//
// for (const ticket of startPointTickets) {
//     if (ticket.countOfSeats >= countOfSeats) {
//         if (ticket.classOfTicket === "Будь-який" || (ticket.classOfTicket === classOfTicket)) {
//             ticketWithParams.push(ticket)
//         }
//     }
// }
//
// if (ticketWithParams) {
//     ticketWithParams.forEach( ticket => {
//         if (ticket.endPoint === endPoint) {
//             return
//         }
//         stop1ArrCity.push(ticket.endPoint)
//     })
// }
//
// for (const point1 of stop1ArrCity) {
//
//     const stop1Start = await PlaneTicket.find({startPoint: startPoint, endPoint: point1})
//     const stop1End = await PlaneTicket.find({startPoint: point1, endPoint: endPoint})
//     const arrPoint1 = await PlaneTicket.find({startPoint: point1})
//
//     for (let ticket of stop2ArrCity) {
//
//         const time1 = point1.departureTime.slice(0,2) * 60 + point1.departureTime.slice(3,5)
//         const time2 = ticket.arrivalTime.slice(0,2) * 60 + ticket.arrivalTime.slice(3,5)
//
//         if (endTicket.countOfSeats >= countOfSeats) {
//             if (ticket1.arrivalDay === endTicket.departureDay) {
//                 if (+time1 < +time2) {
//                     console.log(time1, time2)
//                     if (!ticket2) {
//                         ticket2 = endTicket
//                     }
//                     if (time2 < ticket2.departureTime.slice(0,2) * 60 + ticket2.departureTime.slice(3,5)) {
//                         ticket2 = endTicket
//                     }
//                 }
//             } else {
//                 if (!ticket2) {
//                     ticket2 = endTicket
//                 }
//                 if (time2 < ticket2.departureTime.slice(0,2) * 60 + ticket2.departureTime.slice(3,5)) {
//                     ticket2 = endTicket
//                 }
//             }
//         }
//
//         with1Stop.push([stop1Start, stop1End]);
//     }
//
//     if (arrPoint1) {
//         for (const ticket of arrPoint1) {
//
//             if ( ticket.endPoint === endPoint ) {
//                 continue
//             }
//
//             if (stop2ArrCity.includes(ticket.endPoint)) {
//                 continue
//             }
//
//             stop2ArrCity.push(ticket.endPoint)
//         }
//     }
//
//     for (const point2 of stop2ArrCity) {
//
//         const end = await PlaneTicket.findOne({startPoint: point2, endPoint: endPoint})
//
//         const way1 = await PlaneTicket.findOne({startPoint, endPoint: point1})
//         const way2 = await PlaneTicket.findOne({startPoint: point1, endPoint: point2})
//         const way3 = await PlaneTicket.findOne({startPoint: point2, endPoint})
//
//         if(end) {
//             with2Stops.push([way1, way2, way3])
//         }
//     }
//
//     if (stop1End === null) {
//         continue
//     }
// }