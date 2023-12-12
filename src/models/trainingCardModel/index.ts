export interface TrainingCardProps {
  date: string;
  city: string;
  mood: string;
  rolls: number;
  belts: {
    white: number;
    blue: number;
    purple: number;
    brown: number;
    black: number;
  };
  rests: number;
  subs: number;
  taps: number;
}