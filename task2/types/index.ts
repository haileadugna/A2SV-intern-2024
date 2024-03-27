
export interface OpportunityDataProps {
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    idealCandidate: string;
    categories: string[];
    opType: string;
    startDate: string;
    endDate: string;
    deadline: string;
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    orgID: string;
    datePosted: string;
    status: string;
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string;
    isBookmarked: boolean;
    isRolling: boolean;
    questions: any;
    perksAndBenefits: any;
    createdAt: string;
    updatedAt: string;
    orgEmail: string;
}

export interface SignupProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}


export interface LoginProps {
    email: string;
    password: string;
}

export interface VerifyEmailProps{
    email: string;
    otp: string;
}