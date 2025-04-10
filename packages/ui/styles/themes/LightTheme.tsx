import color from 'color';
import { commonThemeProperties, ref } from './common'

export const generateLightThemeColors = (
    palette: typeof ref.palette,
    opacity: typeof ref.opacity,
) => {
    return {
        primary: palette.primary40,
        primaryContainer: palette.primary90,
        primaryOnHover: color(palette.primary40).darken(0.05).rgb().string(),
        primaryContainerOnHover: color(palette.primary40).lighten(0.99).rgb().string(),
        secondary: palette.secondary40,
        secondaryContainer: palette.secondary90,
        secondaryContainerOnHover: color(palette.secondary40).lighten(0.99).rgb().string(),
        tertiary: palette.tertiary40,
        tertiaryContainer: palette.tertiary90,
        surface: palette.neutral99,
        surfaceVariant: palette.neutralVariant90,
        surfaceDisabled: color(palette.neutral10).alpha(opacity.level2).rgb().string(),
        background: palette.neutral99,
        error: palette.error40,
        errorContainer: palette.error90,
        onPrimary: palette.primary100,
        onPrimaryContainer: palette.primary10,
        onSecondary: palette.secondary100,
        onSecondaryContainer: palette.secondary10,
        onTertiary: palette.tertiary100,
        onTertiaryContainer: palette.tertiary10,
        onSurface: palette.neutral10,
        onSurfaceVariant: palette.neutralVariant30,
        onSurfaceDisabled: color(palette.neutral10).alpha(opacity.level4).hexa(),
        onSurfaceRipple: color(palette.neutral10).alpha(0.12).rgb().string(),
        onError: palette.error100,
        onErrorContainer: palette.error10,
        onBackground: palette.neutral10,
        outline: palette.neutralVariant50,
        outlineVariant: palette.neutralVariant80,
        inverseSurface: palette.neutral20,
        inverseOnSurface: palette.neutral95,
        inversePrimary: palette.primary80,
        // backdrop: color(MD3Colors.neutralVariant20).alpha(0.4).hexa(),
        disabled: palette.neutral70,
        disabledOnBackground: color(palette.neutral0).alpha(0.12).rgb().string(),
        neutral1: palette.neutral100,
        onNeutral1: palette.neutral70,
        lines: palette.neutral90, // #E4E1E6
        surfaceContainerHighest: palette.neutral90,
        elevation: {
            level0: 'transparent',
            // Note: Color values with transparency cause RN to transfer shadows to children nodes
            // instead of View component in Surface. Providing solid background fixes the issue.
            // Opaque color values generated with `palette.primary99` used as background
            level1: color(palette.primary40).alpha(0.05).hexa(), // palette.primary40, alpha 0.05
            level2: color(palette.primary40).alpha(0.08).hexa(), // palette.primary40, alpha 0.08
            level3: color(palette.primary40).alpha(0.11).hexa(), // palette.primary40, alpha 0.11
            level4: color(palette.primary40).alpha(0.12).hexa(), // palette.primary40, alpha 0.12
            level5: color(palette.primary40).alpha(0.14).hexa(), // palette.primary40, alpha 0.14
        },
        scrim: palette.neutral0,
        stateLayer: {
            hover: {
                onSurface: color(palette.neutral10).alpha(opacity.level1).hexa(),
                onSurfaceVariant: color(palette.neutralVariant30).alpha(opacity.level1).hexa(),
                primary: color(palette.primary40).alpha(opacity.level1).hexa(),
                onPrimary: color(palette.primary100).alpha(opacity.level1).hexa(),
                onPrimaryContainer: color(palette.primary10).alpha(opacity.level1).hexa(),
                onSecondaryContainer: color(palette.secondary10).alpha(opacity.level1).hexa(),
                onTertiaryContainer: color(palette.tertiary10).alpha(opacity.level1).hexa(),
                inverseOnSurface: color(palette.neutral95).alpha(opacity.level1).hexa(),
            },
            disabled: {
                onSurface: color(palette.neutral10).alpha(opacity.level2).hexa(),
                onSurface_Level4: color(palette.neutral10).alpha(opacity.level4).hexa(),
            },
            pressed: {
                primary: color(palette.primary40).alpha(opacity.level2).hexa(),
                onSurface: color(palette.neutral10).alpha(opacity.level2).hexa(),
            },
            focussed: {
                primary: color(palette.primary40).alpha(opacity.level2).hexa(),
                onSurface: color(palette.neutral10).alpha(opacity.level2).hexa(),
            },
        },
        palette,
        opacity,
    };
};

export const MD3LightTheme = {
    dark: false,
    themeName: 'MD3LightTheme',
    colors: generateLightThemeColors(ref.palette, ref.opacity),
    ...commonThemeProperties
};
