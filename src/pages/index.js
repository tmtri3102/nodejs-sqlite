import styles from "../styles/Home.module.css";
import { getStudents } from "./mock-data/data";
import Link from "next/link";

export async function getStaticProps() {
    const res = await fetch ( "https://api.api-ninjas.com/v1/covid19?country=vietnam" );
    const data = await res.json ();

    return {props: {data}}
}

export default function Home({data}) {
    return (
        console.log ( data )
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
