interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (inputProfile: Profile, updatedProperty: Partial<Profile>): Profile => {
    return { ...inputProfile, ...updatedProperty };
}

// Sample Input
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
