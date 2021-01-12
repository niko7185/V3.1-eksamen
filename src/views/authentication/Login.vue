<template>
    <form @submit.prevent="submitUser">
        <base-wrapper>
            <div>
                <base-input name="gmail" 
                            label="Input gmail:" 
                            placeholder="eksempel@gmail.com..." 
                            @value-change="getInput"
                            :errorMessage="errorMessages[1]"></base-input>
            </div>
            <div>
                <base-input name="password" 
                            label="Input password:" 
                            inputType="password"
                            placeholder="pa$$w0rd..." 
                            @value-change="getInput"
                            :errorMessage="errorMessages[0]"></base-input>
            </div>
        </base-wrapper>

        <confirm-button>Log in</confirm-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                password: "",
                gmail: "",
            },
            errorMessages: ["",""]
        };
    },
    methods: {
        getInput(value, name) {
            this.user[name] = value;
        },
        submitUser() {
            let valid = true;
            let i = 0;

            this.getUsers();

            const users = JSON.parse(localStorage.getItem("users"));

            console.log(users);

            if (!users) {
                for (let i = 0; i < 2; i++) {
                    this.errorMessages[i] = "Input is incorrect!";
                }
                return;
            }

            for (const name in this.user) {
                if (!this.user[name]) {
                    this.errorMessages[i] = "This field cannot be empty!";
                    valid = false;
                }
                else{
                    this.errorMessages[i] = "";
                }
                i++;
            }

            if (!valid) {
                return;
            }
            

            const user = users.find(u => {
                if (this.user.gmail !== u.gmail) {
                    this.errorMessages[1] = "Gmail is incorrect!"
                    return false;
                }
                else if (this.user.password !== u.password) {
                    this.errorMessages[0] = "Password is incorrect!"
                    return false;
                }

                return true;
            });

            console.log(user);

            if (user) {
                this.logInUser(user);
                this.$router.push("/home");
            }

        }
    },
    inject: ["getUsers","logInUser"],
}
</script>

<style scoped>
    form {
        max-width: 80%;
        margin: 0 auto;
    }

   

    @media screen and (min-width: 530px) {
         section {
            display: flex;
        }

        div {
            flex: 1;
            padding: 5px 1rem;
        }

        div:first-child {
            border-right: 2px dashed rgba(0, 0, 0, 0.4);
        }
    }


</style>