interface ReviewCardProps {
    // image: string | any, 
    name: string, 
    origin: string, 
    comment: string
}

interface ActivityCardProps {
    image: string, 
    title: string, 
    desc: string, 
    slug: string,
    price: string,
    index: number
}

interface RecommendCardProps {
    image: string, 
    title: string, 
    desc: string, 
    slug: string
}

interface SectionHeadProps {
    title: string;
    desc: string;
    containerClass?: string;
    titleClass?: string;
    descClass?: string;
}

interface CustomButtonProps {
    buttonClass?: string,
    iconPosition?: string,
    type?: string
}
export type {
    ReviewCardProps,
    RecommendCardProps,
    ActivityCardProps,
    SectionHeadProps,
    CustomButtonProps
}