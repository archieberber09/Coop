import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../../constants/Images";
import { DrawerItem as DrawerCustomItem } from "../../components";

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = ["Home", "Profile", "Account", "Elements", "Articles"];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
});

export default CustomDrawerContent;
