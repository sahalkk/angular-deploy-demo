import { AbstractControl, FormGroup } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl){
        return new Promise((resolve) => {
            if(control.value !== '1234')
                resolve({invalidOldPassword:true});
            else
                resolve(null)
        })
    }

    static passwordsShouldMatch(control: AbstractControl){
        let newPassword = control.get('newPassword')?.value;
        let confirmPassword = control.get('confirmPassword')?.value;

        if(newPassword != confirmPassword)
            return {passwordsShouldMatch:true}
        else
            return null
    }

}
