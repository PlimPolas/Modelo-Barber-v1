import type { ReactNode } from 'react';
import { AlertTriangle, CheckCircle2, Inbox } from 'lucide-react';

import { Button } from '@/components/actions';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { Skeleton } from '@/components/ui/skeleton';

interface StateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function LoadingState({ label = 'Carregando conteúdo' }: { label?: string }) {
  return (
    <output aria-live="polite" className="block space-y-[var(--space-3)]">
      <span className="sr-only">{label}</span>
      <Skeleton className="h-4 w-2/5 bg-[var(--surface-elevated)]" />
      <Skeleton className="h-12 w-full bg-[var(--surface-elevated)]" />
      <Skeleton className="h-12 w-4/5 bg-[var(--surface-elevated)]" />
    </output>
  );
}

function StateFrame({ icon, title, description, action }: StateProps & { icon: ReactNode }) {
  return (
    <Empty className="border border-dashed border-[var(--border-strong)] bg-[var(--surface)]">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="size-12 bg-[var(--surface-elevated)] text-[var(--brand-accent)]">
          {icon}
        </EmptyMedia>
        <EmptyTitle className="type-h3">{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      {action ? <EmptyContent>{action}</EmptyContent> : null}
    </Empty>
  );
}

export function EmptyState(props: StateProps) {
  return <StateFrame icon={<Inbox aria-hidden="true" />} {...props} />;
}

export function ErrorState({ action, ...props }: StateProps) {
  return (
    <StateFrame
      icon={<AlertTriangle aria-hidden="true" />}
      action={action ?? <Button tone="secondary">Tentar novamente</Button>}
      {...props}
    />
  );
}

export function SuccessState(props: StateProps) {
  return <StateFrame icon={<CheckCircle2 aria-hidden="true" />} {...props} />;
}
