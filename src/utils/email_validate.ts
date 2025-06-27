function validateEmail(email: string): boolean {
    const emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com(\.br)?$/;
    console.log("emaaaaaail:", emailRegExp.test(email));

    return emailRegExp.test(email);
}

export default validateEmail;