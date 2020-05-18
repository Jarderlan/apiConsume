import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
    state = {
        jobs: [],
        companies: []
    }
    componentDidMount() {
        this.loadJobs();
        this.loadCompanies();
    }

    loadJobs = async () => {
        const response = await api.get('/jobs');
        this.setState({ jobs: response.data })
        console.log(response.data);
    };

    loadCompanies = async () => {
        const response = await api.get('/companies');
        this.setState({ companies: response.data })
        console.log(response.data);
    }

    render() {
        const { jobs } = this.state;
        return (
            <div className="jobs-list">
                Contagem Vagas: {jobs.length}
                <br></br>
                {jobs.map(job => (
                    <article key={job.id}>
                        <strong>{job.title}</strong>
                        <p>{job.description}</p>
                        <a href="">Detalhes</a>
                    </article>
                ))}
            </div>
        )
    }
}