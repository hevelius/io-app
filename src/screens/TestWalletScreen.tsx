import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import BaseScreenComponent, {
    ContextualHelpPropsMarkdown
  } from "../../io-app/ts/components/screens/BaseScreenComponent";

  const contextualHelpMarkdown: ContextualHelpPropsMarkdown = {
    title: "onboarding.unlockCode.contextualHelpTitle",
    body: "onboarding.unlockCode.contextualHelpContent"
  };

export const TestWalletScreen = () => {
    return (
        <BaseScreenComponent
            headerTitle="Test Wallet"
            contextualHelpMarkdown={contextualHelpMarkdown}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Text>Test Wallet</Text>
            </SafeAreaView>
        </BaseScreenComponent>
    );
};
