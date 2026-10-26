import posthog, { posthogConfigured } from './posthog.js';

function info(message, attributes) {
  if (posthogConfigured) posthog.logger.info(message, attributes);
}

export function logChatMessageProcessed() {
  info('chat message processed', {
    workflow: 'demo_chat',
    reply_source: 'fixed_demo',
  });
}

export function logThemeApplied(theme) {
  info('theme applied', {
    workflow: 'demo_chat',
    theme,
  });
}

export function logChatReset() {
  info('chat reset completed', {
    workflow: 'demo_chat',
  });
}

export function logTokenChainDemoSent() {
  info('token chain demo sent', {
    workflow: 'token_chain_demo',
  });
}
