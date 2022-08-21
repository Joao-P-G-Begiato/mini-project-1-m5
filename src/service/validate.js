export function validateName(name){
    return name.length>3? true : false
}

export function validateCPF(cpf){
    const ref = parseInt(cpf)
    return ref == `${cpf}` && cpf.length == 11
}

export function validateEmail(email){
    const ref = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    return ref.test(email)
}