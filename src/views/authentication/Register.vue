
<template>
    <form @submit.prevent="submitUser">
        <base-wrapper>
            <div>
                <base-input name="userName" 
                            label="Input your username:" 
                            placeholder="John Doe..." 
                            @value-change="getInput"
                            :errorMessage="errorMessages[0]"></base-input>

                <base-input name="gmail" 
                            label="Input your gmail:" 
                            placeholder="example@gmail.com..." 
                            @value-change="getInput"
                            :errorMessage="errorMessages[2]"></base-input>
            </div>
            <div>
                <base-input name="password" 
                            label="Input your password:" 
                            inputType="password"
                            placeholder="pa$$w0rd..." 
                            @value-change="getInput"
                            :errorMessage="errorMessages[1]"></base-input>
            </div>
        </base-wrapper>

        <confirm-button>Register</confirm-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                userName: "",
                password: "",
                gmail: "",
            },
            errorMessages: ["","",""]
        };
    },
    methods: {
        getInput(value, name) {
            this.user[name] = value;
        },
        submitUser() {
            let valid = true;
            let i = 0;

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

            const newUser = {
                userName: this.user.userName,
                password: this.user.password,
                gmail: this.user.gmail,
                brews: [],
            };
            
            fetch("https://mood-app-storage-default-rtdb.firebaseio.com/brewista-users.json", {
                method: "POST",
                header: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(newUser),
            });

            this.getUsers();

            const users = JSON.parse(localStorage.getItem("users"));

            if (!users) {
                this.logInUser(newUser);
                const localUsers = [newUser];

                localStorage.setItem("users", JSON.stringify(localUsers))

                this.$router.push("/home");

                return;
            }

            const addedUser = users.find(u => u.userName === newUser.userName && u.password === newUser.password 
                                            && u.gmail === newUser.gmail);

            if (addedUser) {
                newUser.id = addedUser.id;
                this.logInUser(newUser);
            }

        }
    },
    inject: ["getUsers", "logInUser"]
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
