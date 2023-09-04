'use client'
import { useState } from "react"

const UserPage = () => {
    const [zip, setZip] = useState()

    const Submit = () => {
        console.log("you did it")
    }
    return (
    <div className="text-gray-300 font-sans bg-slate-950 w-fit items-center flex flex-col mx-auto shadow-lg shadow-yellow-600/50 border-2 rounded-xl mt-12 border-orange-300/50">
        <h1 className="flex justify-center items-center text-4xl  mt-12  mx-8 font-semibold text-gray-200">
            Please answer a few questions.
        </h1>
           <div className="flex flex-col justify-center items-center  ">
               </div>
           <form onSubmit={Submit} className="flex items-center justify-around ">
               <div className="flex flex-col mx-9 ">
                <p className="flex justify-center text-center mt-9 font-semibold text-xl bg-gray-800 border-2 border-zinc-600 rounded-xl">Check all that apply</p>
<div className="flex p-2 flex-col">
    <div className="flex  mx-auto">

            <input 
            className="mx-2"
            type="checkbox"
            id="Sex"
            name="sexWork"
            value="Sex Worker"
            />
    <label id="Sex">Sex Worker</label>

            <input 
            className="mx-2"
            type="checkbox"
            id="prison"
            name="prison"
            value="Prison"
            />
            <label id="prison">Prison</label>

            <input 
         className="mx-2"
            type="checkbox"
            id="undocumented"
            name="undoc"
            value="Undocumented"
            />
            <label id="Undocumented">Undocumented</label>
            <input 
            className="mx-2"
            type="checkbox"
            id="DV/IPV"
            name="DV/IPV"
            value="DV/IPV"
            />
            <label id="DV/IPV">DV/IPV</label>
            </div>
            <div className="flex  mx-auto">

            <input 
        className="mx-2"
        type="checkbox"
        id="Military"
        name="Military"
        value="Military"
        />
            <label id="Military>">Military</label>
            <input 
        className="mx-2"
            type="checkbox"
            id="Childhood"
            name="Childhood"
            value="Childhood"
            />
            <label id="Childhood">Childhood Survivor</label>
            <input 
        className="mx-2"
        type="checkbox"
        id="Disabled"
        name="Disabled"
        value="Disabled"
        />
            <label id="Disabled">Disabled</label>
        </div>
        <p className="flex justify-center text-center mt-9 font-semibold text-xl bg-gray-800 border-2 border-zinc-600 rounded-xl">Which best fit your healing process?</p>
        <div className="flex  mx-auto mt-9">

            <input
            className="mx-2" 
            type="checkbox"
            id="Psych"
            name="Psych"
            value="Psych"
            />
    <label id="Psych">Psychological</label>
    <input 
    className="mx-2"
            type="checkbox"
            id="finance"
            name="finance"
            value="finance"
            />
    <label id="finance">Financial</label>
    <input 
    className="mx-2"
            type="checkbox"
            id="Medical"
            name="Medical"
            value="Medical"
            />
    <label id="Medical">Medical</label>
    </div>
    <div className="flex mx-auto ">
    <input 
    className="mx-2"
            type="checkbox"
            id="Alternative"
            name="Alternative"
            value="Alternative"
            />
    <label id="Alternative">Alternative Therapies</label>
    <input 
    className="mx-2"
            type="checkbox"
            id="Law"
            name="Law"
            value="Law"
            />
    <label id="Law">Law Enforcement</label>
            </div>
            <p className="flex justify-center text-center mt-9 font-semibold text-xl bg-gray-800 border-2 border-zinc-600 rounded-xl">Which would you prefer?</p>
          <div className="flex justify-center mt-9">
            
            <input 
        
            className=" mx-2"
            id="Confidential"
            type="radio"
            name="Confidential"
            value="Confidential"
            />
            <label id="Confidential" >Confidential
                </label>
            <input 
            className=" mx-2"
            id="NonConfidential"
            type="radio"
            name="Confidential"
            value="Non-Confidential"
            />
            <label id="NonConfidential"> Non-Confidential</label>

            <input 
            className=" mx-2"
            type="radio"
            id="Both"
            name="Confidential"
            value="Both"
            />
            <label id="Both"> Both</label>
           </div>
           </div>
           <div className="flex flex-col justify-center items-center mt-8">

           Please Enter your Zipcode 
<input
maxLength={5}
type="number"
placeholder="zip" className="text-black"/>
</div>
<button className=" border border-amber-900 bg-amber-950 mt-9 flex justify-center items-center mx-auto mb-4 w-24 rounded">  Submit</button>
</div>
</form>
    </div>
    )
}
export default UserPage