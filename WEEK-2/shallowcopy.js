const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
              const copyuser={...user}
              copyuser.name="sweety"
              copyuser.preferences.theme="light"
              console.log(user)
              console.log(copyuser)
              