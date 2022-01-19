import svgPed from "../assets/img/ped.svg"
import svgFam from "../assets/img/Fam.svg"

import "../assets/style/DoctorTitle.css"

const DoctorTitle = (props) => {
    const img = props.type == "ped" ? svgPed : svgFam
    const text = props.type == "ped" ? "Lekarze pediatrzy" : "Lekarze rodzinni"
    return (
        <div className="doctor-title">
            <img src={img} alt="ikona lekarza" />
            <span>{text}</span>
        </div>
    )
}

export default DoctorTitle
