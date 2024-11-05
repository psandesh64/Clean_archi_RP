import { BaseRepository } from "../../base/repository/BaseRepository";
import { GetAttendanceParams } from "../../domain/entities/Attendance";
import { AttendanceResponse } from "../../domain/entities/Attendance"; // Define this interface


class AttendanceRepository extends BaseRepository<any, AttendanceResponse> {
    collection = "api/attendance";
  
    async getAttendances(params: GetAttendanceParams): Promise<AttendanceResponse[]> {
      return super.getMany(params); // Pass the params object directly
    }
  }
// class AttendanceRepository extends BaseRepository<IAttendance, any> {
//   collection = "attendance";

//   // Retrieve attendance records for a specific employee by ID, with date range filtering
//   async getAttendanceFromId(id: string, from_date: string, to_date: string): Promise<any> {
//     const instance = this.createInstance();
//     const result = await instance.get(
//       `${this.baseUrl}/employee/${id}/attendance/reports`,
//       {
//         headers: {
//           Authorization: this.token ? `Bearer ${this.token}` : "",
//         },
//         params: { from_date, to_date },
//       }
//     );
//     return result.data;
//   }

//   // Retrieve paginated attendance records with optional filters for date and name
//   async getAttendances({ page, pageSize, name, dateFrom, dateTo }: GetAttendanceParams): Promise<any> {
//     const instance = this.createInstance();
//     const result = await instance.get(
//       `${this.baseUrl}/attendance`,
//       {
//         headers: {
//           Authorization: this.token ? `Bearer ${this.token}` : "",
//         },
//         params: { page, page_size: pageSize, name, from_date: dateFrom, to_date: dateTo },
//       }
//     );
//     return result.data;
//   }
// }

export default AttendanceRepository;
