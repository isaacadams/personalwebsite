import { NavPageComponent } from "./Shared/NavPageComponent";
import React from "react";

class Detail {
    question: string;
    message: string;
    constructor(q, m) {
        this.question = q;
        this.message = m;
    }
}

class Schedule {
    date: string;
    location: string;
    constructor(d, l) {
        this.date = d;
        this.location = l;
    }
}

export class BibleStudy extends NavPageComponent {
    details: Detail[];
    schedule: Schedule[];
    people: string[];
    constructor(props: any) {
        super(props);
        this.people = ["Rob Troop", "Jingle Bells", "Elisha Stigora", "Liam Stigora", "Patrick Mcgargee", "Will Ordini", "Zach Pearl", "Chad Lohmann", "Ryle Mellinger"];
        this.details = [
            new Detail("What", "a bible study on Colossians"),
            new Detail("Where", "see schedule below for rotating locations"),
            new Detail("When", "every other wednesday @ 6:30-8 PM starting on Jan 22nd")
        ];

        this.schedule = [
            new Schedule("Jan 22nd", "Zach Pearl's"),
            new Schedule("Feb 5th", "??"),
            new Schedule("Feb 19th", "??"),
            new Schedule("Mar 4th", "??")
        ];
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 py-2">
                        <h4>Details</h4>
                        {this.details.map((d, i) => 
                            <div key={i} className="row py-2">
                                <span className="col-12 col-lg-2">{d.question}?</span>
                                <span className="col">{d.message}</span>
                            </div>
                        )}
                </div>
                <div className="col-12 py-2">
                    <h4>Schedule</h4>
                    {this.schedule.map((d, i) => 
                        <div key={i} className="row py-2">
                            <span className="col-12 col-lg-2">{d.date}</span>
                            <span className="col">@ {d.location}</span>
                        </div>
                    )}
                </div>
                <div className="col-12 py-2">
                    <h4>Roster</h4>
                    <ul>
                        {this.people.map((name, i) => <li key={i}>{name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}
