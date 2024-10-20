import { Feature } from "@/lib/interfaces/projects";
import FeatureCard from "../feature-card";
import Heading from "../ui/heading";


interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

export default function FeaturesSection({ title, features }: FeaturesSectionProps ){
  return (
    <div>
      <Heading text={title} />
      <div>
        {features.map((feature, index) => (
          <FeatureCard key={index} index={index + 1} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};
