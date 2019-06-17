import { StyleSheet } from 'react-native';

import { colors, general, metrics } from '~/styles';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    flex: 1,
    paddingVertical: metrics.basePadding * 1.5,
  },

  buttonContainerView: {
    flexDirection: 'row',
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  cancel: {
    backgroundColor: colors.regular,
    marginRight: metrics.baseMargin,
  },

  container: {
    backgroundColor: colors.darkTransparent,
    flex: 1,
    justifyContent: 'center',
  },

  contentContainer: {
    ...general.box,
  },

  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
    textAlign: 'center',
  },

  input: {
    alignSelf: 'stretch',
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    color: colors.regular,
    fontSize: 16,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  loading: {
    color: colors.white,
  },

  placeholder: {
    color: colors.light,
  },

  save: {
    backgroundColor: colors.success,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
    textAlign: 'center',
  },
});

export default styles;
