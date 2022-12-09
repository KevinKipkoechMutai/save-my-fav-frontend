import React from "react"

export default function Contact() {
    return (
        <div className="contacts">
            <form>
                <label htmlFor="fname"></label>
                <input className="my-inputs" id="fname" type="text" name="firstname" placeholder="Your first name..."/>

                <label htmlFor="lname">Last Name</label>
                <input className="my-inputs" id="lname" type='text' name="lastname" placeholder="Your last name..."/>

                <select id="country" name="country">
                    <option value='kenya'>Kenya</option>
                    <option value='uganda'>Uganda</option>
                    <option value='ethiopia'>Ethiopia</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something..."></textarea>

                <input className="my-submit" type='submit' value="Submit"/>
            </form> 
        </div>
    )
}