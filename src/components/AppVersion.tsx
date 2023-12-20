import { info as appInfo } from '@/constants/app';
import { cn } from '../lib/utils';

interface AppVersionProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const AppVersion: React.FC<AppVersionProps> = ({
  className = `fixed bottom-3 right-3 text-xs text-muted-foreground`,
}) => {
  return <span className={cn(className)}>v{appInfo.version}</span>;
};

export { AppVersion };
