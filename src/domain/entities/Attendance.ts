// AttendanceResponse.ts
export interface Employee {
    image: string;
    position: string;
    department: string;
    email: string;
    phone: number;
    privilege: string;
    card_number: number;
    password: string;
    is_enabled: boolean;
    name: string;
}

export interface AttendanceData {
    employee_id: number;
    checkin_time: string;
    checkout_time: string;
    work_hours: number;
    status: string;
    remarks: string;
    verify_date: string;
    nepali_verify_date: string;
    employee: Employee;
}

export interface Meta {
    page_number: number;
    page_size: number;
    page_count: number;
    total_items: number;
    has_previous_page: boolean;
    has_next_page: boolean;
    previous_page_number: number | null;
    next_page_number: number | null;
    previous_page_url: string | null;
    next_page_url: string | null;
}

export interface AttendanceResponse {
    meta: Meta;
    attendance_data: AttendanceData[];
}
  
export interface GetAttendanceParams {
from_date:Date,
to_date:Date
}