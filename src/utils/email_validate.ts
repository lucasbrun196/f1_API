function validateEmail(email: string): boolean {
    const emailRegExp: RegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com(\.br)?$/;
    return emailRegExp.test(email);
}

export default validateEmail;