import { ArrowRight, CalendarDays, Menu, Sparkles } from 'lucide-react';

import { Button, IconButton, TextLink } from '@/components/actions';
import { Checkbox, PhoneInput, TextInput } from '@/components/forms';
import {
  EmptyState,
  ErrorState,
  InlineMessage,
  LoadingState,
  SuccessState,
} from '@/components/feedback';
import {
  Divider,
  PageContainer,
  ResponsiveGrid,
  SectionContainer,
  SectionHeader,
  Stack,
} from '@/components/layout';
import { FocalImage, MediaOverlay } from '@/components/media';
import { brand, media } from '@/data';

const colorTokens = [
  ['Background Primary', '--background-primary', '#0B0C0C'],
  ['Background Secondary', '--background-secondary', '#111313'],
  ['Surface', '--surface', '#171A19'],
  ['Surface Elevated', '--surface-elevated', '#202421'],
  ['Surface Inverse', '--surface-inverse', '#F2EFE7'],
  ['Text Primary', '--text-primary', '#F6F3EC'],
  ['Text Secondary', '--text-secondary', '#B7B4AC'],
  ['Text Muted', '--text-muted', '#8E8C85'],
  ['Border', '--border-subtle', '#343936'],
  ['Border Strong', '--border-strong', '#59605B'],
  ['Accent', '--brand-accent', '#D0A15E'],
  ['Accent Hover', '--brand-accent-hover', '#E0B777'],
  ['Accent Active', '--brand-accent-active', '#B98645'],
  ['Focus', '--focus-ring', '#F2C879'],
  ['Success', '--status-success', '#48B982'],
  ['Warning', '--status-warning', '#DCA447'],
  ['Error', '--status-error', '#DE6A62'],
  ['Info', '--status-info', '#6FA8D8'],
] as const;

const spacingTokens = [4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160] as const;

const containerTokens = [
  ['Small', '760px', 'Formulários e leitura'],
  ['Content', '1200px', 'Conteúdo geral'],
  ['Wide', '1440px', 'Grids e mídia editorial'],
  ['Full', '100%', 'Fundos e faixas'],
] as const;

function SpecLabel({ children }: { children: React.ReactNode }) {
  return <p className="type-eyebrow text-[var(--brand-accent)]">{children}</p>;
}

function SpecSection({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <SectionContainer id={id} size="wide" spacing="default" className="scroll-mt-20">
      <div className="grid gap-[var(--space-7)] lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-[var(--space-9)]">
        <div>
          <SpecLabel>{index}</SpecLabel>
          <h2 className="type-h2 mt-[var(--space-3)]">{title}</h2>
          <p className="type-body mt-[var(--space-4)] max-w-md text-[var(--text-secondary)]">
            {description}
          </p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </SectionContainer>
  );
}

export default function FoundationStyleGuide() {
  const previewMedia = media[0]!;

  return (
    <PageContainer>
      <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[rgb(11_12_12/92%)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-[var(--container-wide)] items-center justify-between gap-[var(--space-4)] px-[var(--page-gutter)]">
          <div className="flex items-center gap-[var(--space-3)]">
            <span className="grid size-9 place-items-center border border-[var(--brand-accent)] font-bold text-[var(--brand-accent)]">
              {brand.shortName}
            </span>
            <div>
              <p className="type-label">Barbershop Master</p>
              <p className="type-small text-[var(--text-muted)]">Foundation / 3A</p>
            </div>
          </div>
          <nav aria-label="Índice da style guide" className="hidden items-center gap-[var(--space-5)] lg:flex">
            <TextLink href="#tokens">Tokens</TextLink>
            <TextLink href="#actions">Ações</TextLink>
            <TextLink href="#forms">Formulários</TextLink>
            <TextLink href="#media">Mídia</TextLink>
          </nav>
          <IconButton label="Abrir índice" icon={<Menu aria-hidden="true" />} className="lg:hidden" />
        </div>
      </header>

      <SectionContainer size="wide" spacing="editorial" className="surface-grid">
        <div className="grid items-end gap-[var(--space-7)] lg:grid-cols-[minmax(0,1fr)_22rem]">
          <SectionHeader
            eyebrow="Development style guide"
            title="Fundação pronta para crescer sem perder coerência."
            description="Tokens, contratos de dados e primitives do sistema dark-first. Esta página existe somente para validação interna; não é a landing final."
            as="h1"
          />
          <div className="border-l-2 border-[var(--brand-accent)] bg-[var(--surface)] p-[var(--space-5)]">
            <p className="type-label text-[var(--text-secondary)]">Escopo atual</p>
            <ul className="type-small mt-[var(--space-3)] space-y-[var(--space-2)] text-[var(--text-primary)]">
              <li>React + TypeScript + Vite</li>
              <li>Tailwind CSS 4</li>
              <li>Mobile-first</li>
              <li>Sem APIs ou banco</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      <Divider />

      <SpecSection
        id="tokens"
        index="01 / Tokens"
        title="Cores com função"
        description="Neutros estruturam o produto. Bronze identifica marca e ação. Cores funcionais permanecem estáveis entre clientes."
      >
        <div className="grid gap-[var(--space-3)] sm:grid-cols-2 xl:grid-cols-3">
          {colorTokens.map(([label, token, value]) => (
            <div key={token} className="border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-3)]">
              <div className="h-20 border border-black/10" style={{ background: `var(${token})` }} />
              <div className="mt-[var(--space-3)] flex items-start justify-between gap-[var(--space-3)]">
                <div>
                  <p className="type-small text-[var(--text-primary)]">{label}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{token}</p>
                </div>
                <code className="text-xs text-[var(--text-secondary)]">{value}</code>
              </div>
            </div>
          ))}
        </div>
      </SpecSection>

      <Divider />

      <SpecSection
        id="typography"
        index="02 / Tipografia"
        title="Expressão e legibilidade"
        description="Barlow Condensed assume títulos; Manrope sustenta conteúdo, controles, números e formulários."
      >
        <Stack gap="7">
          <div>
            <SpecLabel>Display XL / 700</SpecLabel>
            <p className="type-display-xl mt-[var(--space-3)]">Presença</p>
          </div>
          <div>
            <SpecLabel>H1 / 700</SpecLabel>
            <p className="type-h1 mt-[var(--space-3)]">Precisão em cada detalhe</p>
          </div>
          <div>
            <SpecLabel>H2 / 700</SpecLabel>
            <p className="type-h2 mt-[var(--space-3)]">Um sistema, muitas identidades</p>
          </div>
          <div>
            <SpecLabel>H3 / 600</SpecLabel>
            <p className="type-h3 mt-[var(--space-3)]">Clareza antes da ornamentação</p>
          </div>
          <div className="grid gap-[var(--space-6)] md:grid-cols-2">
            <div>
              <SpecLabel>Body Large</SpecLabel>
              <p className="type-body-large mt-[var(--space-3)] text-[var(--text-secondary)]">
                Uma introdução curta pode carregar ritmo editorial sem comprometer a leitura.
              </p>
            </div>
            <div>
              <SpecLabel>Body / Small</SpecLabel>
              <p className="type-body mt-[var(--space-3)] text-[var(--text-secondary)]">
                O corpo mantém 16px, line-height confortável e contraste previsível.
              </p>
              <p className="type-small mt-[var(--space-2)] text-[var(--text-muted)]">
                Metadados usam 14px e nunca carregam informação crítica sozinhos.
              </p>
            </div>
          </div>
        </Stack>
      </SpecSection>

      <Divider />

      <SpecSection
        id="layout"
        index="03 / Layout"
        title="Uma escala, não exceções"
        description="Containers nomeados, spacing compartilhado e grid 4/8/12 evitam alinhamentos arbitrários."
      >
        <Stack gap="7">
          <div className="grid gap-[var(--space-3)] md:grid-cols-2">
            {containerTokens.map(([name, width, usage]) => (
              <div key={name} className="border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-4)]">
                <div className="flex items-baseline justify-between gap-[var(--space-3)]">
                  <p className="type-h3">{name}</p>
                  <code className="type-small text-[var(--brand-accent)]">{width}</code>
                </div>
                <p className="type-small mt-[var(--space-2)] text-[var(--text-secondary)]">{usage}</p>
              </div>
            ))}
          </div>

          <div>
            <SpecLabel>Responsive Grid</SpecLabel>
            <ResponsiveGrid className="mt-[var(--space-4)]">
              {Array.from({ length: 12 }, (_, index) => (
                <div
                  key={index}
                  className="grid min-h-20 place-items-center border border-[var(--brand-accent)] bg-[var(--brand-accent-soft)] text-sm text-[var(--brand-accent-hover)]"
                >
                  {index + 1}
                </div>
              ))}
            </ResponsiveGrid>
          </div>

          <div>
            <SpecLabel>Spacing</SpecLabel>
            <div className="mt-[var(--space-4)] space-y-[var(--space-3)]">
              {spacingTokens.map((value, index) => (
                <div key={value} className="grid grid-cols-[3rem_1fr] items-center gap-[var(--space-4)]">
                  <code className="type-small text-[var(--text-secondary)]">{value}</code>
                  <div
                    className="h-3 max-w-full bg-[var(--brand-accent)]"
                    style={{ width: `min(100%, calc(var(--space-${index + 1}) * 3))` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </SpecSection>

      <Divider />

      <SpecSection
        id="actions"
        index="04 / Ações"
        title="Estados reconhecíveis"
        description="Todos os controles respeitam alvos mínimos, foco visível, loading e disabled reais."
      >
        <Stack gap="6">
          <Stack direction="row" gap="3" align="center">
            <Button>Agendar horário <ArrowRight aria-hidden="true" /></Button>
            <Button tone="secondary">Ver serviços</Button>
            <Button tone="ghost">Ação discreta</Button>
          </Stack>
          <Stack direction="row" gap="3" align="center">
            <Button loading>Confirmando</Button>
            <Button disabled>Indisponível</Button>
            <IconButton label="Abrir agenda" icon={<CalendarDays aria-hidden="true" />} />
            <TextLink href="#forms">Ir para formulários</TextLink>
          </Stack>
          <InlineMessage tone="info" title="Focus-visible faz parte do contrato">
            Navegue com Tab para validar o anel de foco em fundos escuros.
          </InlineMessage>
        </Stack>
      </SpecSection>

      <Divider />

      <SpecSection
        id="forms"
        index="05 / Forms"
        title="Entrada sem ambiguidade"
        description="Labels persistem, erros ficam ligados ao campo e o teclado móvel recebe o tipo correto."
      >
        <div className="grid gap-[var(--space-7)] xl:grid-cols-2">
          <Stack gap="5">
            <TextInput
              id="foundation-name"
              label="Nome"
              placeholder="Como devemos chamar você?"
              autoComplete="name"
              required
            />
            <PhoneInput
              id="foundation-phone"
              label="Telefone"
              placeholder="(00) 00000-0000"
              description="Usado somente para informações da reserva."
              required
            />
            <TextInput
              id="foundation-email"
              type="email"
              label="E-mail com erro"
              defaultValue="email-invalido"
              error="Digite um endereço de e-mail válido."
            />
            <Checkbox
              id="foundation-consent"
              label="Aceito receber atualizações desta reserva"
              description="Consentimentos de marketing serão separados."
              defaultChecked
            />
          </Stack>
          <div className="rounded-[var(--radius-surface)] border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)]">
            <SpecLabel>Princípios</SpecLabel>
            <ul className="type-body mt-[var(--space-4)] space-y-[var(--space-3)] text-[var(--text-secondary)]">
              <li>• Campo essencial nunca depende de placeholder.</li>
              <li>• Erro aparece próximo ao controle e é anunciado.</li>
              <li>• Disabled usa atributo real.</li>
              <li>• Controles mantêm altura mínima de 48px.</li>
            </ul>
          </div>
        </div>
      </SpecSection>

      <Divider />

      <SpecSection
        id="feedback"
        index="06 / Feedback"
        title="O sistema sempre responde"
        description="Loading, vazio, erro e sucesso possuem mensagens e caminhos de recuperação próprios."
      >
        <Stack gap="6">
          <div className="grid gap-[var(--space-4)] lg:grid-cols-2">
            <InlineMessage tone="success" title="Configuração válida">Os tokens foram aplicados.</InlineMessage>
            <InlineMessage tone="warning" title="Atenção necessária">Revise o contraste do accent personalizado.</InlineMessage>
            <InlineMessage tone="error" title="Não foi possível continuar">Preserve os dados e ofereça nova tentativa.</InlineMessage>
            <InlineMessage tone="info" title="Informação contextual">Mensagens não dependem apenas da cor.</InlineMessage>
          </div>
          <div className="grid gap-[var(--space-4)] lg:grid-cols-3">
            <EmptyState title="Nenhum item" description="A ausência é esperada e possui uma próxima ação." />
            <ErrorState title="Falha recuperável" description="Explique o problema sem culpar o usuário." />
            <SuccessState title="Ação concluída" description="A confirmação permanece disponível em texto." />
          </div>
          <div className="border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)]">
            <SpecLabel>Loading state</SpecLabel>
            <div className="mt-[var(--space-4)]"><LoadingState /></div>
          </div>
        </Stack>
      </SpecSection>

      <Divider />

      <SpecSection
        id="media"
        index="07 / Responsive Media"
        title="Crop sob controle"
        description="O asset carrega dimensões, tratamento e focal point por breakpoint. O placeholder abstrato valida o primitive sem reutilizar as referências."
      >
        <div className="grid gap-[var(--space-5)] lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,.65fr)]">
          <div className="relative overflow-hidden rounded-[var(--radius-surface)] border border-[var(--border-subtle)]">
            <FocalImage asset={previewMedia} aspectRatio="16 / 10" priority />
            <MediaOverlay variant="bottom" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-[var(--space-5)] md:p-[var(--space-7)]">
              <SpecLabel>FocalImage</SpecLabel>
              <p className="type-h2 mt-[var(--space-2)] max-w-xl">A imagem se adapta sem perder o foco.</p>
            </div>
          </div>
          <Stack gap="4">
            <div className="border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)]">
              <Sparkles aria-hidden="true" className="size-6 text-[var(--brand-accent)]" />
              <p className="type-h3 mt-[var(--space-4)]">Tratamentos</p>
              <p className="type-small mt-[var(--space-2)] text-[var(--text-secondary)]">
                Natural warm, editorial neutral, monochrome e dark overlay.
              </p>
            </div>
            <div className="border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)]">
              <p className="type-label text-[var(--text-secondary)]">Loading</p>
              <p className="type-body mt-[var(--space-2)]">Lazy por padrão. Priority somente para LCP.</p>
            </div>
          </Stack>
        </div>
      </SpecSection>

      <Divider />

      <SectionContainer size="wide" spacing="compact">
        <div className="flex flex-col gap-[var(--space-5)] border border-[var(--border-subtle)] bg-[var(--surface)] p-[var(--space-5)] md:flex-row md:items-center md:justify-between md:p-[var(--space-7)]">
          <div>
            <SpecLabel>Foundation checkpoint</SpecLabel>
            <p className="type-h3 mt-[var(--space-2)]">Fundação preservada para consulta e evolução.</p>
          </div>
          <p className="type-small max-w-lg text-[var(--text-secondary)]">
            Tokens, primitives e contratos continuam disponíveis nesta rota interna de desenvolvimento.
          </p>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
