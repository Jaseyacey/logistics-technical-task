"use client";
import React, { useState } from "react";
import driverData from "@@/app/components/data/drivers.json";

const DriverWireframe = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const daysOfWeek = [
    { date: "2021-02-01", label: "Mon" },
    { date: "2021-02-02", label: "Tue" },
    { date: "2021-02-03", label: "Wed" },
    { date: "2021-02-04", label: "Thu" },
    { date: "2021-02-05", label: "Fri" },
    { date: "2021-02-06", label: "Sat" },
    { date: "2021-02-07", label: "Sun" },
  ];

  const driversArray = driverData.data || [];

  const filteredDrivers = driversArray.filter((driver) => {
    const fullName = `${driver.forename} ${driver.surname}`.toLowerCase();
    const vehicleReg = driver.vehicleRegistration?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();
    return fullName.includes(search) || vehicleReg.includes(search);
  });

  return (
    <div className="driver-wireframe">
      <h1>Driver Activity (1/2/2021 – 7/2/2021)</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or registration"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Vehicle Reg</th>
            <th>Drive (min)</th>
            <th>Rest (min)</th>
            <th>Work (min)</th>
            <th>Available (min)</th>
            <th>Total (min)</th>
            {daysOfWeek.map((day) => (
              <th key={day.date}>{day.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver, driverIndex) => {
          
            const activityTotal = {
              drive: 0,
              rest: 0,
              work: 0,
              available: 0,
            };

            driver.traces?.forEach((trace) => {
              if (trace.date >= "2021-02-01" && trace.date <= "2021-02-07") {
                trace.activity.forEach((act) => {
                
                  if (activityTotal[act.type as keyof typeof activityTotal] !== undefined) {
                    activityTotal[act.type as keyof typeof activityTotal] += act.duration;
                  }
                
                });
              }
            });

          
            const totalMinutes =
              activityTotal.drive +
              activityTotal.rest +
              activityTotal.work +
              activityTotal.available;

            return (
              <tr key={driverIndex}>
                <td>
                  {driver.forename} {driver.surname}
                </td>
                <td>{driver.vehicleRegistration}</td>
                <td>{activityTotal.drive}</td>
                <td>{activityTotal.rest}</td>
                <td>{activityTotal.work}</td>
                <td>{activityTotal.available}</td>
                <td>{totalMinutes}</td>
                {daysOfWeek.map((day) => {
                  const matchingTrace = driver.traces.find(
                    (t) => t.date === day.date
                  );
                
                  const hasActivity =
                    matchingTrace && matchingTrace.activity.length > 0;

                  return (
                    <td
                      key={day.date}
                      style={{
                        backgroundColor: hasActivity ? "green" : "transparent",
                      }}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <style jsx>{`
        .driver-wireframe {
          flex: 1;
          padding: 20px;
          background: #fff;
        }

        .search-container {
          margin-bottom: 20px;
        }

        .search-container input {
          width: 300px;
          padding: 8px;
          font-size: 14px;
        }

        .driver-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .driver-table th,
        .driver-table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }

        .driver-table th {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default DriverWireframe;
