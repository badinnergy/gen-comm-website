import React from 'react'
import { PDFObject } from 'react-pdfobject'

export default function PerlembagaanPage() {
    return (
        <div>
            <h1>Perlembagaan</h1>
            <p>Sekiranya PDF Viewer tidak muncul, klik pada <a href="http://www.ikram.org.my/perlembagaan-ikram-19dis2017.pdf">pautan ini</a> untuk melihat dokumen Perlembagaan.</p>
            <PDFObject url="http://www.ikram.org.my/perlembagaan-ikram-19dis2017.pdf" width="100%" height="1190px" />
        </div>
    )
}
