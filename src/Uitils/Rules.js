const rules = {
  firstName: [

    //  v=> v.length>=20 || "Minimum 20 length"

  ],
  MNValidation: [
    v => v.length >= 10 || "Please Enter Valid Mobile Number"
  ],
  ageRules: [
    v => !!v || 'Age is required',
    v => (v && (v > 0 && v <= 60)) || 'Age should not be more than 60.'
  ],

}


module.exports = rules;