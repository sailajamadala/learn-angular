import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {

    static country(c: FormControl): ValidationErrors {
        const message = {
            'name': {
                'message': 'Please select a country'
            }
        };
        return c.value ? null : message;
    }

    static language(c: FormControl): ValidationErrors {
        const message = {
            'name': {
                'message': 'Please select a language'
            }
        };
        return c.value ? null : message;
    }
    static telephoneNumber(c: FormControl): ValidationErrors {
        const isValidPhoneNumber = /^\d{10}$/.test(c.value);
        const message = {
            'telephoneNumber': {
                'message': 'The phone number must be valid 10 digits'
            }
        };
        return isValidPhoneNumber ? null : message;
    }

    static firstName(c: FormControl): ValidationErrors {
        const message = {
            'name': {
                'message': 'Please enter valid first name'
            }
        };
        return c.value ? null : message;
    }

    static lastName(c: FormControl): ValidationErrors {
        const message = {
            'name': {
                'message': 'Please enter valid last name'
            }
        };
        return c.value ? null : message;
    }

    static password(c: FormControl): ValidationErrors {
        const message = {
            'name': {
                'message': 'Please enter valid password'
            }
        };
        return c.value ? null : message;
    }


    static dateOfBirth(c: FormControl): ValidationErrors {
        const message = {
            'name': {
                'message': 'Please enter date of birth'
            }
        };
        return c.value ? null : message;
    }

    static email(c: FormControl): ValidationErrors {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const isValidEmail = re.test(c.value);
        const message = {
            'name': {
                'message': 'Please enter a valid email'
            }
        };
        return isValidEmail ? null : message;
    }

    static birthYear(c: FormControl): ValidationErrors {
        const numValue = Number(c.value);
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 85;
        const maxYear = currentYear - 18;
        const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
        const message = {
            'years': {
                'message': 'The year must be a valid number between ' + minYear + ' and ' + maxYear
            }
        };
        return isValid ? null : message;
    }

    static countryCity(form: FormGroup): ValidationErrors {
        const countryControl = form.get('country');
        const cityControl = form.get('city');

        if (countryControl != null && cityControl != null) {
            const country = countryControl.value;
            const city = cityControl.value;
            let error = null;

            if (country === 'France' && city !== 'Paris') {
                error = 'If the country is France, the city must be Paris';
            }

            const message = {
                'countryCity': {
                    'message': error
                }
            };

            return error ? message : null;
        }
    }

    static uniqueName(c: FormControl): Promise<ValidationErrors> {
        const message = {
            'uniqueName': {
                'message': 'The name is not unique'
            }
        };

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value === 'Existing' ? message : null);
            }, 1000);
        });
    }

    static telephoneNumbers(form: FormGroup): ValidationErrors {

        const message = {
            'telephoneNumbers': {
                'message': 'At least one telephone number must be entered'
            }
        };

        const phoneNumbers = form.controls;
        const hasPhoneNumbers = phoneNumbers && Object.keys(phoneNumbers).length > 0;

        return hasPhoneNumbers ? null : message;
    }

    static agree(c: FormControl): ValidationErrors {

        const message = {
            'agree': {
                'message': 'Please agree to terms & conditions.'
            }
        };

        const isValid = c.value;

        return isValid ? null : message;
    }

}
