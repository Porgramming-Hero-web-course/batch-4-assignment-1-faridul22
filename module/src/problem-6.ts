{
    //

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (inputProfile: Profile, updatedProperty: Partial<Profile>): Profile => {
        return { ...inputProfile, ...updatedProperty };
    }


    //
}