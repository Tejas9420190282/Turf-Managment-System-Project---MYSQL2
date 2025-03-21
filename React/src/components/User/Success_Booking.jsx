import React, { useEffect } from "react";

function Success_Booking() {

    
    useEffect(() => {
        // Fetch and download the PDF after the component mounts
        const downloadPDF = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4545/generate-pdf`,
                    { responseType: "blob" } // Important for handling binary data (PDF)
                );

                // Create a Blob from the PDF data
                const pdfBlob = new Blob([response.data], { type: "application/pdf" });

                // Create a link element to trigger the download
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(pdfBlob);
                link.download = `player-data-${sloteid}.pdf`;
                link.click();
            } catch (error) {
                console.error("Error downloading PDF:", error);
            }
        };

        downloadPDF();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Booking Successful!
                    </h2>
                    <p className="text-gray-700">
                        Your booking has been confirmed. The PDF is being
                        downloaded...
                    </p>
                </div>
            </div>
        </>
    );
}

export default Success_Booking;
