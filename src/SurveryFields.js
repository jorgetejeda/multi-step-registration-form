import React from "react";

export default function SurveyFields({nextStep, previousStep, fieldsValue}){
    return(
       <div>
            <button onClick={previousStep}>Back</button>
            <button onClick={nextStep}>Next</button>
       </div>
    );
}