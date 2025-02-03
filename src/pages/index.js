import styles from "../styles/Home.module.css";
import { getStudents } from "./mock-data/data";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
    // const res = await fetch ( "https://api.api-ninjas.com/v1/covid19?country=vietnam" );
    const res = await fetch ( "https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=30de923456283628da276346257b5d19" );
    const repo = await res.json ();

    return {props: {repo}}
}

export default function Home({repo}) {
    let iconCode = repo.weather[0].icon;
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td className="city">{repo.name}</td>
                    <td className="temperature">{Math.round(repo.main.temp - 273.15)}<span className="degree"> ℃</span></td>
                    <td className="details">
                        Weather: <span style={{fontWeight: "bold"}}>{repo.weather[0].description}</span><br/>
                        Humidity: <span style={{fontWeight: "bold"}}>{repo.main.humidity} %</span><br/>
                        Wind speed: <span style={{fontWeight: "bold"}}>{repo.wind.speed} m/s</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
        // <div>
        //     <h1>Thông tin COVID-19 tại Việt Nam</h1>
        //
        //     <table>
        //         <thead>
        //         <tr>
        //             <th>Ngày thống kê</th>
        //             <th>Số ca xác nhận</th>
        //             <th>Số ca đang điều trị</th>
        //             <th>Số ca đã khỏi</th>
        //             <th>Số ca tử vong</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         <tr>
        //             <td>{new Date ().toLocaleDateString ( 'vi-VN' )}</td>
        //             <td>{covidData.cases}</td>
        //             <td>{covidData.active}</td>
        //             <td>{covidData.recovered}</td>
        //             <td>{covidData.deaths}</td>
        //         </tr>
        //         </tbody>
        //     </table>
        // </div>
        // <div className={styles.container}>
        //
        //   <main className={styles.main}>
        //     <table className={styles.table}>
        //       <thead>
        //         <tr className={styles.tr}>
        //           <th className={styles.th}>ID</th>
        //           <th className={styles.th}>Name</th>
        //           <th className={styles.th}>Action</th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {getStudents().map((student) => (
        //           <tr className={styles.tr} key={student.id}>
        //             <td className={styles.td}>{student.id}</td>
        //             <td className={styles.td}>{student.name}</td>
        //             <td className={styles.td}>
        //               <Link href={`/student/${encodeURIComponent(student.id)}`}>
        //                 Show
        //               </Link>
        //             </td>
        //           </tr>
        //         ))}
        //       </tbody>
        //     </table>
        //   </main>
        // </div>
    );
}
