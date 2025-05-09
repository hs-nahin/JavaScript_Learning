// 🪜 Step 1: Create a custom useState function that mimics React's useState
const useState = (initialValue) => {
    
    // 📦 We wrap the initial value in an object
    // Why? So it can be updated later and shared by reference
    const state = { value: initialValue }; // example: { value: 5 }

    // 🛠️ This function lets us update the value inside the object
    const updateValue = (newValue) => {
        state.value = newValue; // replace old value with new one
    }

    // 🔄 Return the object and the update function as a pair (just like React)
    return [state, updateValue]; // e.g. [{ value: 5 }, updateValue]
}

// 🧪 Step 2: Let's try using our custom useState
const [count, setCount] = useState(5); 
// count is an object: { value: 5 }
// setCount is the function to change count.value

// ➕ Step 3: Add 15 to the current value
const newCount = count.value + 15; 
// count.value is 5 → 5 + 15 = 20

// 🔧 Step 4: Update the state with the new value using the setter
setCount(newCount); 
// This updates count.value to 20

// 🔍 Step 5: Print the current value
console.log(count.value); 
// count.value is now 20 → this prints: 20 ✅


// 📦 VISUAL MEMORY MODEL
`Before setCount:
----------------
count = { value: 5 }
newCount = 5 + 15 = 20

After setCount(newCount):
--------------------------
count = { value: 20 }

Then console.log(count.value) → prints 20 ✅
`

// 🧠 KEY TAKEAWAYS (REMEMBER THESE):
/*
| Concept              | Why It's Important                                     |
| -------------------- | ------------------------------------------------------ |
| Wrap in object       | So the value stays connected after updates             |
| `count.value`        | Always access the value inside the object              |
| `setCount(newValue)` | Updates the value inside the object                    |
| Values vs References | Primitives (numbers) are copied — objects are shared ✅ |

*/