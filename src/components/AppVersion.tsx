import { app } from '@/constants';
import { cn } from '../lib/utils';

interface AppVersionProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const AppVersion: React.FC<AppVersionProps> = ({
  className = `fixed bottom-3 right-3 text-xs text-muted-foreground`,
}) => {
  return <span className={cn(className)}>v{app.version}</span>;
};

export { AppVersion };
