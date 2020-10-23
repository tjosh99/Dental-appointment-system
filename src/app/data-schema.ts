export class LoginData {
    username: string;
    password: string;
}

export class accounts{

  acc: Object;
  adoctor_id: string;
  arole: string;
  ausername: string;
  apassword: string;
}

export class appointments{

    app_id:number;
    appointment_id:string;
    app_date:string;
    app_time:string;
    patient_name:string;
    doctor_name:string;
    treatment_type:string;
    app_status:string;
    acontact:string;

}

export class doctors {

    doc_id:number;
    doctor_id:string;
    dfname:string;
    dmname:string;
    dlname:string;
    dcontact:string;
    dst_add:string;
    dcity_add:string;
    dprovi_add:string;
    dage:string;
    dsex:string;
    dbloodtype:string;
    dbdate:string;
    
}

export class patients {

    recno:string;
    pat_id:number;
    patient_id:string;
    ptreatment_type:string;
    pfname:string;
    pmname:string;
    plname:string;
    pst_add:string;
    pcity_add:string;
    pprovi_add:string;
    pcontact:string;
    page:string;
    psex:string;
    pbloodtype:string;
    pbdate:string;

}

export class payments{

    pay_id:number;
    payment_id:string;
    pdate:string;
    patient_name:string;
    doctor_name:string;
    ptype:string;
    treatment_price:string;
    pamount:string;
    pchange:string;
    

}

