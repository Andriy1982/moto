import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useToasts} from 'react-toast-notifications';

import {useForm} from 'react-hook-form';
import {Support, supportActions} from '@app/bus/support';

//app
import TextFiled from '@app/component/TextFiled';
import {TextareaFiled} from '@app/component/TextareaFiled';
import {userSelectors} from '@app/bus/user';
import {SubmitButton} from '@app/component/Buttons';
import DropDownEmpty from '@app/component/DropDownEmpty';

//local
import {schema} from './validate';

//style
import {Form, Title, FormWrap, TextWrapper} from './FeedbackPage.style';
import {Container} from '@app/component/TextFiled/TextFiled.style';

const items = ['error', 'partners', 'idea', 'other'];

export const FeedbackPage: React.FC = () => {
  const dispatch = useDispatch();
  const {addToast} = useToasts();

  const user = useSelector(userSelectors.getCurrent);
  const [openSelect, setIsOpenSelect] = useState<boolean>(false);
  const {t} = useTranslation();
  const {
    handleSubmit,
    reset,
    control,
    formState: {errors},
  } = useForm<Support.ReqDataCreate>({
    defaultValues: {
      email: user?.email || '',
      subject: '',
      category: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Support.ReqDataCreate) => {
    console.log('Data', data);
    dispatch(supportActions.createAsync({...data, toast: addToast}));
    reset();
  };
  return (
    <FormWrap>
      <Title>Свяжитесь с нами</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="category"
          control={control}
          render={({field: {onChange, value}}) => (
            <Container>
              <label>Категория обращения</label>
              <TextWrapper error={!!errors.category} onClick={() => setIsOpenSelect(true)}>
                {value || 'Выберите категорию'}
              </TextWrapper>
              <DropDownEmpty
                isOpen={openSelect}
                setIsOpen={setIsOpenSelect}
                onChange={(v: any) => {
                  onChange(v);
                  setIsOpenSelect(false);
                }}
                value={value}
                items={items.map((key) => ({
                  label: t(`feedback.${key}`),
                  value: t(`feedback.${key}`) as string,
                }))}
              />
            </Container>
          )}
        />

        <Controller
          name="subject"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextFiled
              onChange={onChange}
              value={value}
              label="Тема обращения"
              isShowLabel={true}
              error={errors.subject && t(`form.error.${errors.subject.message}`)}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextFiled
              onChange={onChange}
              value={value}
              label="Ваша почта"
              isShowLabel={true}
              error={errors.email && t(`form.error.${errors.email.message}`)}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({field: {onChange, value}}) => (
            <TextareaFiled
              onChange={onChange}
              value={value}
              label="Расскажите подробнее"
              isShowLabel={true}
              error={errors.description && t(`form.error.${errors.description.message}`)}
            />
          )}
        />
        <SubmitButton type="submit" text="отправить" />
      </Form>
    </FormWrap>
  );
};
