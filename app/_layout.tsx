import { Slot, usePathname } from "expo-router";
import Head from "expo-router/head";
import { Text } from "react-native";
import Sidebar from "@/components/sidebar/Sidebar";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { colors } from "@/theme/color";
import { useResponsive } from "@/theme/responsive";
import { FULL_NAME } from "@/config/config";

const maxPageWidth = 900;
const minGapWidth = 600;
const maxColumnGap = 50;

const routeTitles: Record<string, string> = {
  "/": "About",
  "/about": "About",
  "/experience": "Experience",
  "/projects": "Projects",
  "/contact": "Contact",
  "/skills": "Skills",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  
  const { width, isMobile } = useResponsive();
  const pathname = usePathname();
  const pageTitle = routeTitles[pathname] ?? FULL_NAME;
  const browserTitle = pageTitle === FULL_NAME
    ? FULL_NAME
    : `${pageTitle} | ${FULL_NAME}`;

 function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  const progress = clamp((width - minGapWidth) / (maxPageWidth - minGapWidth), 0, 1);
  const columnGap = isMobile ? 0 : progress * maxColumnGap;
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[
      styles.page,
      isMobile && styles.pageMobile,
    ]}>
      <Head>
        <title>{browserTitle}</title>
      </Head>

      <ScrollView
        style={[
          styles.scrollView,
          isMobile && styles.scrollViewMobile,
        ]}
        contentContainerStyle={[
          styles.scrollContent,
          isMobile && styles.scrollContentMobile,
        ]}
      >
        <View style={[
          styles.container,
          isMobile && styles.containerMobile,
          {gap: columnGap}
          ]}>
          <View style={[
            styles.leftColumn,
            isMobile && styles.leftColumnMobile,
          ]}>
            <Sidebar />
          </View>

          <View style={[
            styles.rightColumn,
            isMobile && styles.rightColumnMobile,
          ]}>
            <Slot />
          </View>
        </View>

        <Text style={styles.copyrightText}>
          Copyright © 2026 Seth Rojas. All rights reserved.
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background.default,
    paddingTop: 50,
    borderWidth: 1
  },
  pageMobile: {
    paddingTop: 28,
  },
  container: {
    flexDirection: "row",
    alignItems: 'flex-start',
    width: "100%",
    maxWidth: maxPageWidth,
    flex: 1,
  },
  containerMobile: {
    flexDirection: "column",
    maxWidth: 600,
  },
  leftColumn: {
    maxWidth: 200,
    paddingLeft: 5, 
  },
  leftColumnMobile: {
    maxWidth: "100%",
    width: "100%",
    paddingLeft: 0,
    paddingBottom: 28,
  },
  rightColumn: {
    alignSelf: "stretch",
    flex: 1,
  },
  rightColumnMobile: {
    width: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background.default,
  },
  scrollViewMobile: {
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  scrollContentMobile: {
    paddingHorizontal: 18,
  },
  copyrightText: {
    marginTop: "auto",
    paddingVertical: 40,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.md,
    color: 'grey',
  }
});
