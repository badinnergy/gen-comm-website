import React from 'react'
import { PDFObject } from 'react-pdfobject'

export default function BorangKawasanPage() {
    return (
        <div>
            <h1>Borang Tukar Kawasan</h1>
            <p>Sekiranya PDF Viewer tidak muncul, klik pada <a href="http://perlis.ikram.org.my/v1/forms/Borang_Permohonan_Tukar_Daerah.pdf">pautan ini</a> untuk melihat Borang Tukar Kawasan.</p>
            <PDFObject url="http://perlis.ikram.org.my/v1/forms/Borang_Permohonan_Tukar_Daerah.pdf" width="100%" height="1190px" />
        </div>
    )
}
