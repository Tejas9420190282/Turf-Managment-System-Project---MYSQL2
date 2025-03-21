
// generate_PDF_Controller.js (Node)

const express = require("express");
const PDFDocument = require("pdfkit");

const generate_PDF_Controller = async (req, res) => {
    const {
        slote_id,
        turf_id,
        name,
        contact,
        turfName,
        city,
        area,
        pin,
        date,
        start_time,
        end_time,
        light,
        equipment,
        totalPrice,
    } = req.body;

    try {
        // Create a new PDF document
        const doc = new PDFDocument();

        // Set response headers for PDF download
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
            "Content-Disposition",
            `attachment; filename=booking-details-${slote_id}.pdf`
        );

        // Pipe the PDF to the response
        doc.pipe(res);

        // Add content to the PDF
        doc.fontSize(25).text("Booking Details", { align: "center" });
        doc.moveDown();
        doc.fontSize(15).text(`Slote number : ${slote_id}`);
        doc.fontSize(15).text(`Turf number : ${turf_id}`);
        doc.fontSize(15).text(`Player Name: ${name}`);
        doc.text(`Contact: ${contact}`);
        doc.text(`Turf Name: ${turfName}`);
        doc.text(`City: ${city}`);
        doc.text(`Area: ${area}`);
        doc.text(`Pincode: ${pin}`);
        doc.text(`Date: ${date}`);
        doc.text(`Start Time: ${start_time}`);
        doc.text(`End Time: ${end_time}`);
        doc.text(`Light Required: ${light}`);
        doc.text(`Equipment Required: ${equipment}`);
        doc.text(`Total Price: ${totalPrice}`);
        doc.moveDown();

        // Finalize the PDF
        doc.end();
    } catch (error) {
        console.log(`Error in generate_PDF_Controller: ${error.message}`);
        res.status(500).json({
            success: false,
            error: `Error in generate_PDF_Controller: ${error.message}`,
        });
    }
};

exports.generate_PDF_Controller = generate_PDF_Controller;
