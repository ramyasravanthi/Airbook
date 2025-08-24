const BookingDetail = require("../models/bookingDetail");
const airportsList = require("../utils/airportsList");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be signed in first!");
        return res.redirect("/login");
    }
    next();
}

module.exports.validateSearchData = (req, res, next) => {
    const { from, to, date } = req.body;
    const airports = airportsList.airports;
    let flagFrom = false,
        flagTo = false;

    if (from.toUpperCase() === to.toUpperCase()) {
        req.flash("error", "Please select different Destination and Arrival.");
        return res.redirect("/");
    }

    airports.forEach(airport => {
        if (from.toUpperCase() === airport.IATA_code ) flagFrom = true;
        if (to.toUpperCase() === airport.IATA_code ) flagTo = true;
        if (flagTo & flagFrom) return;
    });
    if (!flagFrom || !flagTo) {
        req.flash("error", "Please select a valid Airport Code.");
        return res.redirect("/");
    }
 
    // Date Validation
    let userDate = date.split(".");
    [ userDate[0], userDate[1] ] = [ userDate[1], userDate[0] ];
    userDate = userDate.join(".");

    if (!Date.parse(userDate) || new Date(userDate).getTime() <= Date.now()) {
        req.flash("error", "Please select a valid Date.");
        return res.redirect("/");
    }
    next();
}

module.exports.validateBookingId = async (req, res, next) => {
    try {
        const result = await BookingDetail.exists({ _id: req.params.id });
        if (result) {
            return next();
        }
        req.flash("error", "Invalid Boarding Pass");
        res.redirect("/bookings");
    } catch (err) {
        console.error(err);
        req.flash("error", "Something went wrong");
        res.redirect("/bookings");
    }
};
