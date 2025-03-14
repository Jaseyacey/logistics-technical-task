"use client";
import React from "react";
import driverData from "@@/app/components/data/drivers.json";

const DriverWireframe = () => {
  const daysOfWeek = [
    { date: "2021-02-01", label: "Mon" },
    { date: "2021-02-02", label: "Tue" },
    { date: "2021-02-03", label: "Wed" },
    { date: "2021-02-04", label: "Thu" },
    { date: "2021-02-05", label: "Fri" },
    { date: "2021-02-06", label: "Sat" },
    { date: "2021-02-07", label: "Sun" },
  ];

  return (
    <div className="driver-wireframe">
      <h1>Driver Activity (1/2/2021 – 7/2/2021)</h1>
      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Vehicle Reg</th>
            <th>Total Activity Duration</th>
            {daysOfWeek.map((day) => (
              <th key={day.date}>{day.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {driverData.data.map((driver, driverIndex) => {
            let totalMinutes = 0;

            driver.traces?.forEach((trace) => {
              if (trace.date >= "2021-02-01" && trace.date <= "2021-02-07") {
                const dayTotal = trace.activity.reduce(
                  (acc, act) => acc + act.duration,
                  0
                );
                totalMinutes += dayTotal;
              }
            });

            return (
              <tr key={driverIndex}>
                <td>
                  {driver.forename} {driver.surname}
                </td>
                <td>{driver.vehicleRegistration}</td>
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

        .driver-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .driver-table th,
        .driver-table td {
          border: 1px solid #ccc;
          padding: 8px;
          width: 200px;
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
