import React from 'react';
import { accountService } from "../../_services/";

const Dashboard = () => {
    console.log(accountService.getRole());
    return (
        <div className="Dashboard">
            Coucou la dashboard
        </div>
    );
};

export default Dashboard;