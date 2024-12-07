function generateMealPlan() {
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const name = document.getElementById('name').value;
    const goal = document.getElementById('goal').value;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];

    let mealPlanContent = `
        <html>
        <head>
            <title>Meal Plan</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');
                :root {
                    --primary-color: #97996a;
                    --secondary-color: #bbbf6b;
                    --tertiary-color: #f7e1b7;
                    --accent-color: #bb7953;
                    --dark-color: #5a3926;
                    --light-color: #fffaf2;
                    --button-color: #ffd9dd;
                    --button-hover: #ffc0c7;
                }
                body {
                    font-family: 'Parkinsans', sans-serif;
                    background-color: var(--tertiary-color);
                    color: var(--dark-color);
                    margin: 0;
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .container {
                    background-color: var(--light-color);
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    padding: 2rem 3rem;
                    min-width: 500px;
                    max-width: 800px;
                    margin: 0 auto;
                    overflow: auto;
                }
                h1, h2 {
                    text-align: center;
                    color: var(--primary-color);
                }
                .meal-plan {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .meal-plan h3 {
                    margin-bottom: 5px;
                    color: var(--primary-color);
                }
                .meal-plan p {
                    margin: 0;
                }
                .button-container {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 2rem;
                }
                .button {
                    font-family: inherit;
                    font-weight: bold;
                    font-size: medium;
                    display: block;
                    padding: 15px 25px;
                    background-color: var(--button-color);
                    color: var(--accent-color);
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    text-align: center;
                }
                .button:hover {
                    background-color: var(--button-hover);
                    color: var(--dark-color);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Meal Plan for ${name}</h1>
                <p>Goal: ${goal}</p>
                <div class="meal-plan">
    `;

    days.forEach(day => {
        mealPlanContent += `<h2>${day}</h2>`;
        meals.forEach(meal => {
            const mealId = `${day.toLowerCase()}${meal}`;
            const mealValue = document.getElementById(mealId).value;
            mealPlanContent += `<p>${meal}: ${mealValue}</p>`;
        });
    });

    mealPlanContent += `
                </div>
                <div class="button-container">
                    <button class="button" onclick="window.print()">Print Meal Plan</button>
                    <button class="button" onclick="window.location.href='finalProject.html'">Back</button>
                </div>
            </div>
        </body>
        </html>
    `;

    document.open();
    document.write(mealPlanContent);
    document.close();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function printPlanner() {
    window.print();
}