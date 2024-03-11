interface JobTimeline {
    type: string;
    JobTitle: string;
    JobType: string;
    JobLocation: string;
    JoiningDate: string;
    CompanyName: string;
    ImageUrl: string;    
}

interface Posts {
    imageUrl: string;
    convincingDescription: string;
}

interface PostsTimeline {
    type: string;
    date: string;
    posts: Posts[];
}

export type Timeline = JobTimeline | PostsTimeline;
