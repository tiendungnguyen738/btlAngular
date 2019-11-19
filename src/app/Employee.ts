import { Department } from './Department';

export interface Employee{
    id:number;
    empName:string;
    empDob:string;
    empSex:number;
    empNumberInsurance:string;
    empAddress:string;
    empPhone:string;
    empType:number;
    department:Department;
}