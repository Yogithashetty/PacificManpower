import AboutCompany from "../../compounent/About/AboutUs";
import Companies from "../../compounent/About/Companies";
import HistoryCompany from "../../compounent/About/History";
import LamdOwner from "../../compounent/About/LamdOwner";
import KeyStaff from "../../compounent/About/ManagementTeam";

function AboutUs(){
    return(
        <>
        <AboutCompany/>
        <HistoryCompany/>
        <Companies/>
        <LamdOwner />
        <KeyStaff />
        </>
    );


}

export default AboutUs