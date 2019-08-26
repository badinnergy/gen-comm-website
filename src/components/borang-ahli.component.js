import React from 'react'
import { PDFObject } from 'react-pdfobject'

export default function BorangAhliPage() {
    return (
        <div>
            <h1>Borang Keahlian</h1>
            <p>Sekiranya PDF Viewer tidak muncul, klik pada <a href="http://www.ikram.org.my/PDF/Borang%20Keahlian%20IKRAM.pdf">pautan ini</a> untuk melihat Borang Keahlian.</p>
            <PDFObject url="http://www.ikram.org.my/PDF/Borang%20Keahlian%20IKRAM.pdf" width="100%" height="1190px" />
        </div>
    )
}
